import { MagnifyingGlass } from 'phosphor-react'
import { FilterFormContainer } from './styles'

export function FilterForm() {
  return (
    <>
      <FilterFormContainer>
        <input type="text" placeholder="Buscar Paciente" />

        <button type="submit">
          <MagnifyingGlass size={20} />
          Pesquisar
        </button>
      </FilterFormContainer>
    </>
  )
}
