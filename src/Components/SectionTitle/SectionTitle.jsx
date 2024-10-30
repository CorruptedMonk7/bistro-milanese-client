

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center mx-auto md:w-3/12 my-4">
            <p className="text-yellow-600 italic">---{subHeading}---</p>
            <h3 className="text-4xl uppercase border-y-2 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;