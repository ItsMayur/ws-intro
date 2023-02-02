import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/JoinUs" element={<Department1 />} />
      <Route exact path="/JoinUs/Research&Insights" element={<Department2 />} />
      <Route exact path="/JoinUs/DataAnalystics" element={<Department3 />} />
      <Route exact path="/JoinUs/DataCommunication" element={<Department4 />} />
      <Route exact path="/JoinUs/Functional" element={<Department5 />} />
      <Route exact path="/LoginForm" element={<Loginform />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>;
  render(<App />);
  const titleElement = screen.getByText(/Winnix Seekers/i);
  expect(titleElement).toBeInTheDocument();
});
