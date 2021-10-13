import posed from "react-pose";
export const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 50, beforeChildren: false },
  exit: { opacity: 0 },
});
