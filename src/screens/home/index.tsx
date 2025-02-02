import { InputMask } from "@react-input/mask";

import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Logo } from "../../components/logo";
import { Title } from "../../components/title";
import { ButtonIcon } from "../../components/button-icon";

import {
    Aside,
    Balance,
    ChartAction,
    ChartContainer,
    ChartContent,
    Filters,
    Header,
    InputGroup,
    Main,
    SearchTransaction,
    Section
} from "./styles";
import { Card } from "../../components/card";
import { Transaction } from "../../components/transaction";
import { formatCurrency } from "../../utils/format-currency";



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
                                mask="dd/mm/aaaa"
                                replacement={{ d: /\d/, m: /\d/, a: /\d/, }}
                                variant="dark"
                                label="Início"
                                placeholder="dd/mm/aaaa"
                            />
                            <InputMask
                                component={Input}
                                mask="dd/mm/aaaa"
                                replacement={{ d: /\d/, m: /\d/, a: /\d/, }}
                                variant="dark"
                                label="Fim"
                                placeholder="dd/mm/aaaa"
                            />
                            <ButtonIcon />
                        </InputGroup>
                    </Filters>
                    <Balance>
                        <Card title="Saldo" amount={1000000} />
                        <Card title="Saldo" amount={1000000} variant="incomes" />
                        <Card title="Saldo" amount={1000000} variant="expenses" />
                    </Balance>
                    <ChartContainer>
                        <header>
                            <Title
                                title="Gastos"
                                subtitle="Despesas por categoria no período" />
                        </header>
                        <ChartContent></ChartContent>
                    </ChartContainer>
                    <ChartContainer>
                        <header>
                            <Title
                                title="Evolução Financeira"
                                subtitle="Saldo, Receitas e Gastos no ano" />
                            <ChartAction>
                                <InputMask
                                    component={Input}
                                    mask="dd/mm/aaaa"
                                    replacement={{ a: /\d/ }}
                                    variant="black"
                                    label="Ano"
                                    placeholder="aaaa"
                                />
                                <ButtonIcon />
                            </ChartAction>
                        </header>
                        <ChartContent></ChartContent>
                    </ChartContainer>
                </Section>
                <Aside>
                    <header>
                        <Title title="Transações" subtitle="Receitas e Gastos no período" />
                        <SearchTransaction>
                            <Input
                                variant="black"
                                placeholder="Procurar transação..."
                            />
                            <ButtonIcon />
                        </SearchTransaction>
                        <Transaction
                            id={1}
                            amount={20000}
                            date="09/10/23"
                            category={{ title: 'Alimentação', color: "#fff" }} 
                            title="Mercado" 
                            />


                    </header>
                </Aside>

            </Main>
        </>

    )
}