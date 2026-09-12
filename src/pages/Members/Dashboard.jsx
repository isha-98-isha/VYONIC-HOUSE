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
      <div className="members-dashboard w-full md:w-[calc(100%+140px)]">
        
        {/* Responsive Header Section */}
        <div className="members-dashboard__header">
          <span className="members-dashboard__eyebrow sm:text-xs">
            <b>WELCOME · VYONIC HOUSE</b>
          </span>
          <h1 className="members-dashboard__title sm:text-4xl md:text-5xl">
            LET'S GET YOU <br/>
            <span className="members-dashboard__title-accent sm:inline">SET UP TO TRAIN</span>, STORE.
          </h1>
          <p className="members-dashboard__description sm:text-base">
            Four short steps and you're on the floor. Every member of the <br/>House starts the same way — because every member trains to a <br/> number.
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
                className={`assessment-step grid-cols-1 sm:grid-cols-[auto_1fr_auto] sm:gap-8 ${isActive ? 'assessment-step--active' : 'assessment-step--locked'}`}
              >
                
                {/* 1. Counter Digits */}
                <div className={`assessment-step__number ${isActive ? 'assessment-step__number--active' : 'assessment-step__number--locked'}`}>
                  {step.id}
                </div>

                {/* 2. Text Parameters */}
                <div className="assessment-step__details">
                  <h3 className={`assessment-step__title sm:text-base ${isActive ? '' : 'assessment-step__title--locked'}`}>
                    {step.title}
                  </h3>
                  <p className="assessment-step__description sm:text-sm">
                    {step.description}
                  </p>
                </div>

                {/* 3. Action / Lock Trigger Buttons */}
                <div className="assessment-step__action sm:w-auto sm:justify-end sm:pt-0">
                  {isActive ? (
                    // Using your exact reusable Button component with the 'begin' variant!
                    <Button 
                      variant="begin" 
                      href="#begin"
                      className="w-full justify-center sm:w-auto"
                    >
                      <b>BEGIN</b>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="assessment-step__button-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Button>
                  ) : (
                    <span className="assessment-step__locked-label">
                      LOCKED
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
