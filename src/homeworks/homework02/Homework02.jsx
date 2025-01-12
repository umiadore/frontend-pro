import ProfileCard from "../../components/profileCard/ProfileCard";


function Homework02() {
  return (
    <div>
     <div className="box"><h3 className="h3">Homework 02: Profile Cards  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/984e4b31160797.5643aae67dfda.gif" alt="TARDIS GIF" style={{ width: '30px', height: 'auto', verticalAlign: 'middle' }} /></h3></div> 
      <div className="grid-container">
        <ProfileCard
          avatar="https://ichef.bbci.co.uk/images/ic/1200x675/p01m3j1p.jpg"
          fullname="11th Doctor"
          domain="Time traveller"
          hobby="Bow Ties and Fezzes"
        />
        <ProfileCard
          avatar="https://images.immediate.co.uk/production/volatile/sites/3/2022/06/David-Tennant-7d145f9.jpg?quality=90&resize=980,654"
          fullname="10th Doctor"
          domain="Time traveller"
          hobby="Allons-y!"
        />
        <ProfileCard
          avatar="https://www.tvstyleguide.com/wp-content/uploads/2015/10/ninth_doctor_cover.jpg"
          fullname="9th Doctor"
          domain="Time traveller"
          hobby="Fantastic!"
        />
      </div>
    </div>
  );
}

export default Homework02;
