import { screen, fireEvent } from "@testing-library/react";
import { http, HttpResponse, delay } from "msw";
import { setupServer } from "msw/node";
import { renderWithProviders } from "../utils/test.utils";
import { allTodos } from "./testData";
import App from "../App";

export const handlers = [
  http.get("http://localhost:8000/api/v1/tasks", async () => {
    await delay(150);

    return HttpResponse.json(allTodos);
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test("renders all tasks by default", async () => {
  renderWithProviders(<App />);

  // should initially show loading state
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  // wait for the tasks to be loaded
  await screen.findByText(/Task one/i);

  // verify that loading state is not present
  expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();

  // verify the rendered tasks
  expect(screen.getByText(/Task one/i)).toBeInTheDocument();
  expect(screen.getByText(/Task two/i)).toBeInTheDocument();
  expect(screen.getByText(/Task three/i)).toBeInTheDocument();
  expect(screen.getByText(/Task four/i)).toBeInTheDocument();
  expect(screen.getByText(/Task five/i)).toBeInTheDocument();
  expect(screen.getByText(/Task six/i)).toBeInTheDocument();
  expect(screen.getByText(/Task seven/i)).toBeInTheDocument();
  expect(screen.getByText(/Task eight/i)).toBeInTheDocument();
  expect(screen.getByText(/Task nine/i)).toBeInTheDocument();
});
