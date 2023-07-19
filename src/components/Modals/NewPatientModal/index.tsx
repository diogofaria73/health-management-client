import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { CloseButton, Content, Overlay } from './style'

export function NewPatientModal() {
  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Dialog.Title>Novo Paciente</Dialog.Title>
          <CloseButton>
            <X size={24} />
          </CloseButton>
          <form action="">
            <input type="text" placeholder="Nome" required />
            <input
              type="text"
              placeholder="Documeneto de Identificação"
              required
            />
            <input type="email" placeholder="Email" required />
            <button type="submit">Cadastrar</button>
          </form>
        </Content>
      </Overlay>
    </Dialog.Portal>
  )
}
