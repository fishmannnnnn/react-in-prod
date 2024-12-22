import { useDispatch, useSelector } from "react-redux";

import { Button } from "@/shared/ui/Button/Button";

import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";

export const Counter = () => {
	const dispatch = useDispatch();
	const counterValue = useSelector(getCounterValue);
	const inc = () => {
		dispatch(counterActions.increment());
	};
	const dec = () => {
		dispatch(counterActions.decrement());
	};
	return (
		<div>
			<h1 data-testid="value-title">value = {counterValue}</h1>
			<Button onClick={inc} data-testid="increment-btn">+</Button>
			<Button onClick={dec} data-testid="decrement-btn">-</Button>
		</div>
	);
};
