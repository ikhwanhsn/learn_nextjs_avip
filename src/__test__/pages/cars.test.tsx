import Cars from "@/pages/cars";
import CarsPage from "@/pages/cars/[id]";
import { render } from "@testing-library/react";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/cars",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => {}),
      prefetch: jest.fn(() => null),
      isReady: true,
    };
  },
}));

describe("Cars Page", () => {
  it("should render cars page", () => {
    const page = render(<Cars />);
    expect(page).toMatchSnapshot();
  });
  it("should render cars page", () => {
    const page = render(<CarsPage />);
    expect(page).toMatchSnapshot();
  });
});
