// ...imports and other code...

export default function TechnologySelect({ technologies, setTechnologies }) {
  const handleTechnologiesChange = (e, index) => {
    const updatedTechnologies = [...technologies];
    updatedTechnologies[index] = e.target.value;
    setTechnologies(updatedTechnologies);
  };

  const handleAddTechnology = () => {
    setTechnologies([...technologies, ""]);
  };

  const handleRemoveTechnology = (index) => {
    const updatedTechnologies = [...technologies];
    updatedTechnologies.splice(index, 1);
    setTechnologies(updatedTechnologies);
  };

  return (
    <div className="container mx-auto mt-8">
      {/* ... (other code) ... */}
      <div>
        <label htmlFor="technologies" className="block mb-1 font-semibold">
          Technologies
        </label>
        {technologies.length > 0 &&
          technologies?.map((tech, index) => (
            <div key={index} className="flex space-x-2">
              <input
                type="text"
                value={tech}
                onChange={(e) => handleTechnologiesChange(e, index)}
                className="w-full border rounded p-2"
              />
              <button
                type="button"
                onClick={() => handleRemoveTechnology(index)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        <button
          type="button"
          onClick={handleAddTechnology}
          className="bg-green-500 text-white px-4 py-2 rounded mt-2"
        >
          Add Technology
        </button>
      </div>
      {/* ... (other code) ... */}
    </div>
  );
}
