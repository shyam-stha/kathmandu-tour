import TitleAbout from './TitleAbout'

const VisionMission = () => {
    return (
        <section className='flex flex-col gap-5 text-justify text-sm text-body sm:text-lg'>
            <div>
                <TitleAbout
                    title='Our Vision And Mission'
                    style='pb-3'
                />
                <p>
                    citytour.app adventures envisions a global community that
                    supports social development through tourism. We are
                    dedicated to the creation and demonstration of a new
                    corporate concept of linked prosperity. Our mission consists
                    of three interrelated parts:
                </p>
                <TitleAbout title='Product mission' />
                <p>
                    To provide our clients with memorable holiday experiences
                    through proper planning and implementation of tours and
                    treks that exceed their expectations.
                </p>
                <TitleAbout title='Social mission' />
                <p>
                    To initiateways to improve the quality of life of a broad
                    community: local, national and international, by actively
                    recognizing the central role a business holds in the
                    structure of society.
                </p>
                <TitleAbout title='Economic mission' />
                <p>
                    To operate the company on a sound financial basis of
                    profitable growth, thereby creating career opportunities
                    within the local community and increasing value for
                    shareholders and financial rewards for all employees.
                    Underlying the mission of socialtours.com travels &
                    socialtreks.com adventures is the determination to seek new
                    and creative ways of addressing all three statements, whilst
                    holding a deep respect for all individuals and the
                    communities of which they are a part.
                </p>
            </div>

            <div>
                <TitleAbout
                    title='OUR VALUES'
                    style='py-0'
                />
                <p className='pb-2'>
                    All business that socialtours.com travels & socialtreks.com
                    adventures does is based on the following six values:
                </p>
                <TitleAbout title='Respect for every individual' />
                <p>
                    Businesses are like families. Every person has a different
                    role to play, which, when played well, creates a happy
                    family. Every individual deserves respect and each and every
                    issue that a person has requires special attention.
                </p>
                <TitleAbout title='Honesty & integrity' />
                <p>
                    Honesty and integrity are always the best policies and will
                    inevitably pay dividends. An open, honest business makes
                    steady progress. Continued excellence in delivery Quality
                    should never to be compromised and can always be improved
                    on. It is the strongest marketer of products and the only
                    element that can create a lasting impression.
                </p>
                <TitleAbout title='Social responsibility of business' />
                <p>
                    Without the support of society a business cannot survive.
                    Giving back to society is the only way a business can
                    fulfill this commitment. Every business has a commitment
                    towards society as a whole.
                </p>
                <TitleAbout title='Money is never the only goal' />
                <p>
                    Profits have to be made, but never by means that go against
                    our values. Making a business successful is a Dharma (a
                    spiritual good) for society and results in a good Karma.
                </p>
                <TitleAbout title='The importance of environmental conservation' />
                <p>
                    The environment is our greatest asset and needs
                    preservation. Exploiting nature is short term and yields
                    unsustainable dividends, whereas protecting nature is long
                    term and yields sustainable dividends.
                </p>
            </div>
        </section>
    )
}

export default VisionMission
