import {
  BookOpen,
  ArrowCircleUp,
  CurrencyDollar,
  FolderOpen,
  Door,
  LockOpen,
  ArrowArcRight,
  ArrowsOut,
  SignOut,
  BookmarkSimple,
  Books,
} from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Pacientes Cadastrados</span>
          <Books size={24} color="#00B37E" />
        </header>
        <strong>32</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Pacientes Admitidos</span>
          <Door size={24} color="#00B37E" />
        </header>
        <strong>15</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Pacientes com Alta</span>
          <SignOut size={24} color="#00B37E" />
        </header>
        <strong>17</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
