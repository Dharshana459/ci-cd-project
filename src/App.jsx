import heroImg from './assets/hero.png'
import './App.css'

const skills = ['React', 'Vite', 'AWS', 'CI/CD', 'Docker', 'JavaScript']

const links = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
]

function App() {
  return (
    <div className="page">
      <div className="card">
        <img src={heroImg} className="avatar" alt="Profile" />
        <h1>Brindhadevi</h1>
        <p className="bio">Full-stack developer passionate about cloud, DevOps, and modern web apps.</p>
        <div className="skills">
          {skills.map(s => <span key={s} className="badge">{s}</span>)}
        </div>
        <div className="links">
          {links.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="link-btn">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
