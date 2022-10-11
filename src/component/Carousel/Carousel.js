import Card from "react-bootstrap/Card";

function ImgOverlayExample() {
  return (
    <Card className="text-white h-75">
      <Card.Img
        src="https://webengage.com/blog/wp-content/uploads/sites/4/2018/04/How-to-Use-an-Interactive-Quiz-to-Boost-Your-Online-Conversions.png"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title className="fw-bold fs-2 mt-5">
          Check your ability, Grow your skill
        </Card.Title>
        <Card.Text className="text-white-50">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;
