const AboutMe = () => {
  return (
    <div className="mt-8">
      <div>
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="max-w-3xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          obcaecati nemo excepturi ea tenetur, culpa officiis. Aliquam repellat
          provident, totam cumque esse quibusdam temporibus illo doloribus,
          magnam, saepe eum molestias?
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 my-4">
        <div className=" w-full lg:w-1/2">
          <div>
            <h2 className="text-3xl font-bold">Education</h2>
            <ul className="ml-6 mt-4">
              <li className="text-xl font-bold list-disc">
                America Dental Medical Univercity
              </li>
              <li>BDS</li>
              <li>1998 - 2003</li>
            </ul>
            <ul className="ml-6 mt-4">
              <li className="text-xl font-bold list-disc">
                America Dental Medical Univercity
              </li>
              <li>MDS</li>
              <li>2003 - 2008</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold my-2">Work & Experience</h2>
            <ul className="ml-6 mt-4">
              <li className="text-xl font-bold list-disc">
                Glowing Smiles Family Dental Clinic
              </li>
              <li> 2010 - Present (5 years)</li>
            </ul>
            <ul className="ml-6 mt-4">
              <li className="text-xl font-bold list-disc">
                Comfort Care Dental Clinic
              </li>
              <li>2007 - 2010 (3 years)</li>
            </ul>
            <ul className="ml-6 mt-4">
              <li className="text-xl font-bold list-disc">
                Dream Smile Dental Practice
              </li>
              <li>2005 - 2007 (2 years)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl my-2 font-bold">Services</h2>
            <ul className="list-disc ml-8">
              <li>Tooth cleaning</li>
              <li>Root Canal Therapy</li>
              <li>Implants</li>
              <li>Composite Bonding</li>
              <li>Fissure Sealants</li>
              <li>Surgical Extractions</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Awards</h2>
          <h5 className="text-xl mt-3 ml-4">July 2019</h5>
          <li className="list-disc font-bold text-2xl mb-2 ml-4">
            Humanitarian Award
          </li>
          <p className="max-w-2xl mx-auto ml-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam
            commodi repellendus sequi a ad id suscipit itaque voluptatem
            assumenda.
          </p>
          <h5 className="text-xl mt-3 ml-4">July 2019</h5>
          <li className="list-disc font-bold text-2xl mb-2 ml-4">
            Humanitarian Award
          </li>
          <p className="max-w-2xl mx-auto ml-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam
            commodi repellendus sequi a ad id suscipit itaque voluptatem
            assumenda.
          </p>
          <h5 className="text-xl mt-3 ml-4">July 2019</h5>
          <li className="list-disc font-bold text-2xl mb-2 ml-4">
            Humanitarian Award
          </li>
          <p className="max-w-2xl mx-auto ml-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam
            commodi repellendus sequi a ad id suscipit itaque voluptatem
            assumenda.
          </p>
          <div>
            <h2 className="text-3xl my-2 font-bold">Specializations</h2>
            <ul className="list-disc ml-8">
              <li>Children Care</li>
              <li>Dental Care</li>
              <li>Oral and Maxillofacial Surgery</li>
              <li>Orthodontist</li>
              <li>Periodontist</li>
              <li>Prosthodontics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
