import { ReactNode } from "react";
import { Overlay, Portal, Trigger, Root, Content } from "./styles";

type DialogProps = {
    children: ReactNode;
    trigger: JSX.Element;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export function Dialog({children,trigger,onOpenChange,open}:DialogProps){
    return(
        <Root open={open} onOpenChange={onOpenChange}  >
            <Trigger>{trigger}</Trigger>
            <Portal>
                <Overlay />
                <Content>{children}</Content>
            </Portal>
        </Root>
    );
}