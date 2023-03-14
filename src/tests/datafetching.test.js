import { render, waitFor, screen } from "@testing-library/react";
import Admin from "../components/admin";
import {} from '@testing-library/jest-dom'
import axios from "axios" 
jest.mock("axios");

function Test(a){
    return a
}

const dummyTodos = [
{
num: 0,
quantity: 1,
name: "pizza",
desc: "demo", 
price:298,
img:"image"
}
];

test("todos list", async () => {
axios.get.mockResolvedValue({ data: dummyTodos });
render(<Admin funcNav={Test}/>);

const todoList = await waitFor(() => screen.findAllByTestId("todo"));

expect(todoList).toHaveLength(1);
}); 