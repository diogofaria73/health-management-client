import { Door, SignOut, Books } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'
import { useDashboard } from '../../shared/hooks/useDashboard/useDashboard'

export function Summary() {
  const dashboard = useDashboard()
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Pacientes Admitidos</span>
          <Books size={24} color="#00B37E" />
        </header>
        <strong>{dashboard.admission}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Pacientes com Alta</span>
          <Door size={24} color="#00B37E" />
        </header>
        <strong>{dashboard.discharged}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <SignOut size={24} color="#00B37E" />
        </header>
        <strong>{dashboard.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
