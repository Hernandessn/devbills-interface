import { InputMask } from "@react-input/mask";

import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Logo } from "../../components/logo";
import { Title } from "../../components/title";
import { ButtonIcon } from "../../components/button-icon";

import {
    Balance,
    Filters,
    Header,
    InputGroup,
    Main,
    Section
} from "./styles";
import { Card } from "../../components/card";



export function Home() {
    return (
        <>
            <Header>
                <Logo />
                <div>
                    <Button>Nova transação</Button>
                    <Button>Nova Categoria</Button>
                </div>
            </Header>
            <Main>
                <Section>
                    <Filters>
                        <Title title="Saldo" subtitle="Receitas e despesas no período" />
                        <InputGroup>
                            <InputMask
                                component={Input}
                                mask="dd/mm/yyyy"
                                replacement={{ d: /\d/, m: /\d/, y: /\d/, }}
                                variant="dark"
                                label="Início"
                                placeholder="dd/mm/yyyy"
                            />
                            <InputMask
                                component={Input}
                                mask="dd/mm/yyyy"
                                replacement={{ d: /\d/, m: /\d/, y: /\d/, }}
                                variant="dark"
                                label="Fim"
                                placeholder="dd/mm/yyyy"
                            />
                            <ButtonIcon />
                        </InputGroup>
                    </Filters>
                    <Balance>
                        <Card title="Saldo" amount={1000000} />
                        <Card title="Saldo" amount={1000000} variant="incomes"/>
                        <Card title="Saldo" amount={1000000} variant="expenses"/>
                    </Balance>
                </Section>

            </Main>
        </>

    )
}