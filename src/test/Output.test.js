import React from "react";
import renderer from "react-test-renderer";
import { render, cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import Output from "../components/Output";

describe("Output Component", () => {
    afterEach(cleanup);

    let weatherData;

    beforeEach(() => {
        weatherData = [
            {
                id: 1,
                properties: {
                    title: "sample-weather-data",
                    type: "earthquake",
                    time: 1574023724090,
                    updated: 1574024356540,
                    rms: 0.17999999999999999,
                    dmin: 0.1145,
                    magType: "ml",
                },
            },
            {
                id: 2,
                properties: {
                    title: "sample-data",
                    type: "earthquake",
                    time: 1574023725090,
                    updated: 1574084357540,
                    rms: 0.27999999999999999,
                    dmin: 0.2167,
                    magType: "ml",
                },
            },
        ];
    });

    it("should renders without crashing", () => {
        const OutputComponent = renderer.create(<Output data={weatherData} />).toJSON();
        expect(OutputComponent).toMatchSnapshot();
    });

    it("should render correct number of element in output component", () => {
        const OutputWrapper = shallow(<Output data={weatherData} />);
        expect(OutputWrapper.find("div").exists).toBeTruthy();
        expect(OutputWrapper.find("picture").exists).toBeTruthy();
        expect(OutputWrapper.find("img").exists).toBeTruthy();
        expect(OutputWrapper.find("span").exists).toBeTruthy();
        expect(OutputWrapper.find("p").exists).toBeTruthy();
        expect(OutputWrapper.find("p").length).toEqual(12);
        expect(OutputWrapper.find("li").length).toEqual(0);
    });
});
