import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });
