import Card from "../card";

const About = () => {
  return (
    <div className="container flex flex-col 2xl:items-center mt-10 md:gap-4 gap-2">
      <div className="2xl:text-4xl text-2xl 2xl:w-[70%] font-serif 2xl:text-center">
        Flair’s lifestyle-based care management services empower doctors to
        support patients with chronic conditions between visits, covered by
        insurance.
      </div>
      <div className="2xl:text-center text-sm font-normal text-gray-600 2xl:text-base 2xl:w-[40%] mb-8">
        We are setting new standard of care for families across geographies,
        cultural and background.
      </div>
      <div className="flex md:gap-12 gap-4 md:flex-row flex-col">
        <Card
          head="For Employers"
          desc="Flair’s lifestyle-based care management services empower doctors to
        support patients with chronic"
          url="user-solid.svg"
        />
        <Card
          head="For Patients"
          desc="Achieve your health goals with additional support from qualified dieticians and health coaches between doctor's visits."
          url="person-solid.svg"
        />
        <Card
          head="For Clinics"
          desc="Offer preventative health and lifestyle interventions to provide the best possible patient experience."
          url="notes-medical-solid.svg"
        />
      </div>
    </div>
  );
};

export default About;
