import { AppHeader } from './components/AppHeader'
import { FirstSight } from './components/FirstSight'
import { Benefits } from './components/Benefits'
import { Goals } from './components/Goals'

export function App() {
  return (
    <>
      <AppHeader />
      <main className="flex flex-col items-center gap-14 px-7">
        <FirstSight />
        <Benefits />
        <Goals />
      </main>
    </>
  )
}
