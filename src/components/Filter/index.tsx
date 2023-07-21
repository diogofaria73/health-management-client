import { MagnifyingGlass } from 'phosphor-react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { FilterFormContainer } from './styles'
import { PatientContext } from '../../shared/context/PatientContext'

const searchForm = z.object({
  query: z.string().nonempty({ message: 'Campo obrigatório' }),
})

type searchFormInput = z.infer<typeof searchForm>

export function FilterForm() {
  const { fetchPatients } = useContext(PatientContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchFormInput>({
    resolver: zodResolver(searchForm),
  })

  async function handleSearchPatients(data: searchFormInput) {
    await fetchPatients(data.query)
  }

  return (
    <>
      <FilterFormContainer onSubmit={handleSubmit(handleSearchPatients)}>
        <input
          type="text"
          placeholder="Buscar Paciente"
          {...register('query')}
        />

        <button type="submit">
          <MagnifyingGlass size={20} />
          Pesquisar
        </button>
      </FilterFormContainer>
    </>
  )
}
