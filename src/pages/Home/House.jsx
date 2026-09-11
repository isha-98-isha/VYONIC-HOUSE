import Navbar from '../../components/Navbar/Navbar'
import './House.css'
import vyonicMark from '../../assets/vyonic-mark-BEL-OzHk.png'
import {
  Activity,
  ArrowRight,
  CalendarDays,
  ChartNoAxesCombined,
  ClipboardCheck,
  Cpu,
  Dumbbell,
  UserRoundCheck,
  UsersRound,
} from 'lucide-react'

function Home() {
  return (
    <div className="app-shell" id="top">
      <Navbar />

      <main className="home">
        <section className="hero max-[900px]:!min-h-0 max-[900px]:!w-full max-[900px]:!px-4 max-[900px]:!pb-16 max-[900px]:!pt-32 max-[900px]:!pl-4">
          <p className="signin-link max-[900px]:!top-16 max-[900px]:!right-4 max-[900px]:!left-auto max-[900px]:!m-0 max-[900px]:!text-[10px]">
            <a href="/signup">SIGN IN</a>
          </p>
          <div className="hero-content max-[900px]:!top-16 max-[900px]:!left-4 max-[900px]:!m-0 max-[900px]:!text-[11px]">
            <p> 
              <img src={vyonicMark} alt="VYONIC Logo" /> 
                VYONIC 
            <span>•</span> 
                <span className="max-[900px]:!text-[10px] max-[900px]:!tracking-[3px] max-[900px]:!text-[#b6acac]">HOUSE</span>
            </p>
          </div>

          <p className="hero-eyebrow max-[900px]:!mx-0 max-[900px]:!mb-7 max-[900px]:!mt-7 max-[900px]:!text-[9px] max-[900px]:!tracking-[2px]">
            DUBAI • PERFORMANCE GYM
          </p>

          <h1 className="hero-title max-[900px]:!max-w-full max-[900px]:!text-[clamp(58px,18vw,78px)] max-[900px]:!leading-[0.88] max-[900px]:!tracking-[-1px]">
            BECOME WHO YOU WERE <span>BUILT TO BE</span>.
          </h1>

          <p className="hero-description max-[900px]:!mx-0 max-[900px]:!mt-8 max-[900px]:!max-w-[290px] max-[900px]:!text-[15px] max-[900px]:!leading-[1.45]">
            A performance gym built around you — data-led,
            tech-enabled, human-coached.
          </p>

          <button className="hero-button max-[900px]:!mt-7 max-[900px]:!max-w-full max-[900px]:!px-4 max-[900px]:!text-[10px] max-[900px]:!tracking-[2px]">
            START WITH YOUR ASSESSMENT
            <span>→</span>
          </button>

        </section>
      </main>
              {/* METHOD */}
        <section className="method-section max-[900px]:!w-[calc(100%-32px)] max-[900px]:!mt-20">

          <p className="section-label">
            THE METHOD
          </p>

          <div className="method-grid max-[900px]:!grid-cols-1">

            <div className="method-card max-[900px]:!border-r-0 max-[900px]:border-b max-[900px]:border-[#292929]">
              <Activity className="method-icon" aria-hidden="true" />

              <h2>DATA-LED</h2>

              <p className="card-main-text">
                Your numbers. Your plan.
              </p>

              <p className="card-sub-text">
                Six-pillar VYONIC Score baseline.
              </p>
            </div>


            <div className="method-card max-[900px]:!border-r-0 max-[900px]:border-b max-[900px]:border-[#292929]">
              <Cpu className="method-icon" aria-hidden="true" />

              <h2>TECH-ENABLED</h2>

              <p className="card-main-text">
                Progress tracked every step.
              </p>

              <p className="card-sub-text">
                Every session, scan and re-test.
              </p>
            </div>


            <div className="method-card max-[900px]:!border-r-0">
              <UserRoundCheck className="method-icon" aria-hidden="true" />

              <h2>HUMAN-LED</h2>

              <p className="card-main-text">
                Real coaches own progress.
              </p>

              <p className="card-sub-text">
                On the floor with you.
              </p>
            </div>

          </div>

        </section>


        {/* JOURNEY */}
        <section className="journey-section max-[900px]:!w-[calc(100%-32px)] max-[900px]:!mt-20 max-[900px]:!pt-16">

          <p className="section-label">
            THE JOURNEY
          </p>

          <div className="journey-grid max-[900px]:!grid-cols-1">

            <div className="journey-card">
              <span className="journey-number">01</span>

              <ClipboardCheck className="journey-icon" aria-hidden="true" />

              <h2>ASSESS</h2>
            </div>


            <div className="journey-card">
              <span className="journey-number">02</span>

              <UserRoundCheck className="journey-icon" aria-hidden="true" />

              <h2>COACH</h2>
            </div>


            <div className="journey-card">
              <span className="journey-number">03</span>

              <Dumbbell className="journey-icon" aria-hidden="true" />

              <h2>TRAIN</h2>
            </div>


            <div className="journey-card">
              <span className="journey-number">04</span>

              <ChartNoAxesCombined className="journey-icon" aria-hidden="true" />

              <h2>RE-TEST</h2>
            </div>

          </div>

        </section>

        {/* ON THE FLOOR */}
        <section className="floor-section max-[900px]:!w-[calc(100%-32px)] max-[900px]:!mt-20">
          <p className="section-label">ON THE FLOOR</p>

          <div className="floor-grid max-[900px]:!grid-cols-1">
            <div className="floor-card max-[900px]:!border-r-0 max-[900px]:border-b max-[900px]:border-[#292929]">
              <UserRoundCheck className="floor-icon" aria-hidden="true" />
              <h2>COACHING</h2>
              <p>Real coaches. Real progress.</p>
            </div>

            <div className="floor-card max-[900px]:!border-r-0 max-[900px]:border-b max-[900px]:border-[#292929]">
              <CalendarDays className="floor-icon" aria-hidden="true" />
              <h2>CLASSES</h2>
              <p>A full weekly timetable.</p>
            </div>

            <div className="floor-card max-[900px]:!border-r-0">
              <UsersRound className="floor-icon" aria-hidden="true" />
              <h2>COMMUNITY</h2>
              <p>Show-up energy, every day.</p>
            </div>
          </div>
        </section>

        <section className="assessment-section max-[900px]:!w-[calc(100%-32px)] max-[900px]:!flex-col max-[900px]:!items-start max-[900px]:!gap-8 max-[900px]:!px-0">
          <h2>
            EVERY JOURNEY BEGINS WITH
            <br />
            <span>AN ASSESSMENT</span>.
          </h2>
          <button className="assessment-button" type="button">
            BEGIN
            <ArrowRight aria-hidden="true" />
          </button>
        </section>

        <footer className="site-footer max-[900px]:!w-[calc(100%-32px)] max-[900px]:!flex-col max-[900px]:!items-start max-[900px]:!gap-6">

          <div className="footer-brand">
            <img src={vyonicMark} alt="VYONIC Logo" />
            <h2>VYONIC</h2>
            <span className="footer-dot">•</span>
            <h3>HOUSE</h3>
          </div>

          <span className="footer-city">
            DUBAI · LONDON · GLOBAL
          </span>

          <span className="footer-copy">
            © VYONIC
          </span>

        </footer>
      </div>
  )
}

export default Home