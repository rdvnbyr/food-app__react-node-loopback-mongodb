import { useSelector, shallowEqual } from "react-redux";

export function useSelectorHook(arg) {
  useSelector((state) => state[arg], shallowEqual);
}
