import { Button, Icon } from "react-bulma-components";

// small buttons for Edit/Delete/etc
const ActionButton = ({ children, onClick }: { children: React.Component; onClick: () => void }) => (
  <Button text style={{ height: "1.5em", padding: "0.75em" }} onClick={onClick}>
    <Icon>{children}</Icon>
  </Button>
);
export default ActionButton;
