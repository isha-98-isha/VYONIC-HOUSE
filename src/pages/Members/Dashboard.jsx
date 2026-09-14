import DashboardLayout from '../../components/Layout/DashboardLayout';
import Button from '../../components/Button/Button';
import './Dashboard.css';

export default function MembersDashboard() {

  // Clean, reusable step list data architecture 
  const assessmentSteps = [
    {
      id: '01',
      title: 'YOUR GOALS',
      description: 'Tell us what you want to get out of the House.',
      status: 'active',
    },
    {
      id: '02',
      title: 'BASELINE ASSESSMENT',
      description: 'Six pillars, one score — the numbers we train to.',
      status: 'locked',
    },
    {
      id: '03',
      title: 'FIRST SESSION ON US',
      description: 'Train with a coach — see the House in motion.',
      status: 'locked',
    },
    {
      id: '04',
      title: 'MEMBERSHIP',
      description: 'Activate your Performance Package and get on the floor.',
      status: 'locked',
    },
  ];

  return (
    <DashboardLayout>
      <div className="members-dashboard lg:pl-[230px]">

        {/* Responsive Header Section */}
        <div className="members-dashboard__header">
          <span className="members-dashboard__eyebrow sm:text-xs">
            <b>WELCOME · VYONIC HOUSE</b>
          </span>
          <h1 className="members-dashboard__title sm:text-4xl md:text-5xl">
            LET'S GET YOU <br /><span className="whitespace-nowrap"><span className="members-dashboard__title-accent sm:inline">SET UP TO TRAIN</span>, STORE.</span>
          </h1>
          <p className="members-dashboard__description sm:text-base">
            Four short steps and you're on the floor. Every member of the House starts the same way — because every member trains to a <br/>number.
          </p>
        </div>

        {/* Premium Divider Accent Line */}
        <div className="members-dashboard__divider" />

        {/* Step Cards List Container */}
        <div className="members-dashboard__steps">
          {assessmentSteps.map((step) => {
            const isActive = step.status === 'active';

            return (
              <div
                key={step.id}
                className={`assessment-step ${isActive ? 'assessment-step--active' : 'assessment-step--locked'}`}
              >

                {/* 1. Counter Digits */}
                <div className={`assessment-step__number ${isActive ? 'assessment-step__number--active' : 'assessment-step__number--locked'}`}>
                  {step.id}
                </div>

                {/* 2. Dedicated Indicator Column — dot or lock, never inline with text */}
                <div className="assessment-step__indicator" aria-hidden="true">
                  {isActive ? (
                    <span className="assessment-step__active-dot" />
                  ) : (
                    <svg
                      className="assessment-step__lock-icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                    </svg>
                  )}
                </div>

                {/* 3. Text Content — title and description only, no icon */}
                <div className="assessment-step__details">
                  <h3 className={`assessment-step__title ${isActive ? '' : 'assessment-step__title--locked'}`}>
                    {step.title}
                  </h3>
                  <p className="assessment-step__description">
                    {step.description}
                  </p>
                </div>

                {/* 3. Action / Lock Trigger Buttons */}
                <div className="assessment-step__action">
                  {isActive ? (
                    // Using your exact reusable Button component with the 'begin' variant!
                    <Button
                      variant="begin"
                      href="#begin"
                      className="w-full justify-center whitespace-nowrap sm:w-auto"
                    >
                      <b>BEGIN</b>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="assessment-step__button-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Button>
                  ) : (
                    <span className="assessment-step__locked-label whitespace-nowrap">
                      <b>LOCKED</b>
                    </span>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </DashboardLayout>
  );
}
