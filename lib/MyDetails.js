export const YearOfExperiance = () => {
  return 4;
};

export const MyName = () => {
  return "Sooto Selim";
};
export const MyAddress = () => {
  const address = "No 39 Ifeosefowora Adegbayi, Nigeria";
  const searchAdress = "Ifeosefowora Adegbayi, ibadan , Nigeria";

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    searchAdress
  )}`;
  return (
    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
      {address}
    </a>
  );
};

export const MyEmail = () => {
  const emailAddress = "adewaleselim6@gmail.com";
  return (
    <span>
      <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
    </span>
  );
};

// export const MyName = () => {
//   return "Sooto Selim";
// };
export const MyPhone = () => {
  const phoneNumber = "+2347087121696";
  const formattedPhoneNumber = phoneNumber.replace(/\s/g, ""); // Remove any spaces from the phone number

  return <a href={`tel:${formattedPhoneNumber}`}>{phoneNumber}</a>;
};

// export const MyAddress = () => {
//   return "No 39 Ifeosefowora Adegbayi, Nigeria";
// };
