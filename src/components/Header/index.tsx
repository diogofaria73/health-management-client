import * as Dialog from '@radix-ui/react-dialog'
import { UserPlus } from 'phosphor-react'
import { HeaderContainer, HeaderContent, AddButton } from './styles'
import logoImg from '../../assets/logo.svg'
import { NewPatientModal } from '../Modals/NewPatientModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <AddButton>
              <UserPlus size={22} />
            </AddButton>
          </Dialog.Trigger>
          <NewPatientModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
