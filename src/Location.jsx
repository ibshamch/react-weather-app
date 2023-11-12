const Location = ({ location, setLocation, requestWeather }) => {
  return (
    <div className="location">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestWeather(location);
        }}
      >
        <input
          type="text"
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />
      </form>
    </div>
  );
};
export default Location;
