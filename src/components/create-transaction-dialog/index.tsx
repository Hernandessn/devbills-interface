import { useCallback, useState } from "react";
import { Dialog } from "../dialog";
import { Button } from "../button";
import { Title } from "../title";

import { Container, CurrencyInput, InputGroup, RadioForm, RadioGroup, Content } from "./styles";
import { Input } from "../input";
import { InputMask } from "@react-input/mask";


export function CreateTransactionDialog() {

    const [open, setOpen] = useState(false);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    const onSubmit = useCallback(() => {
        handleClose();
    }, [handleClose]);


    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
            trigger={<Button>Nova transação</Button>}>
            <Container>
                <Title
                    title="Nova Transação"
                    subtitle="Crie uma nova transação para seu controle financeiro" />


                <form >
                    <Content>
                    <InputGroup>
                        <label >Categoria</label>
                        <select >
                            <option value="null">Selecione categoria</option>
                        </select>
                    </InputGroup>
                    <Input
                        label="Nome"
                        placeholder="Nome da transação..." />

                    <InputGroup>
                        <label >Valor</label>
                        <CurrencyInput placeholder="R$ 0,00 " format="currency" currency="BRL" />
                        <InputMask
                            component={Input}
                            mask="dd/mm/aaaa"
                            replacement={{ d: /\d/, m: /\d/, a: /\d/, }}
                            variant="black"
                            label="Data"
                            placeholder="dd/mm/aaaa"
                        />

                        <RadioForm>
                            <RadioGroup>
                                
                                <input type="radio" id="income" value="income" name="type"/>
                                <label htmlFor="income">Receita</label>
                            </RadioGroup>
                            <RadioGroup>   
                                <input type="radio" id="expense" value="expense" name="type" />
                                <label htmlFor="expense">Gastos</label>
                            </RadioGroup>
                        </RadioForm>
                    </InputGroup>
                    <footer>
                        <Button onClick={handleClose} variant="outline" type="button"> Cancelar</Button>
                        <Button onClick={onSubmit} type="button"> Cadastrar</Button>
                    </footer>
                    </Content>
                </form>
            </Container>
        </Dialog>
    )
}