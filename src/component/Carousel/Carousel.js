import Card from "react-bootstrap/Card";

function ImgOverlayExample() {
  return (
    <Card className="text-white">
      <Card.Img
        src="https://webengage.com/blog/wp-content/uploads/sites/4/2018/04/How-to-Use-an-Interactive-Quiz-to-Boost-Your-Online-Conversions.png"
        alt="Card image"
      />
      <Card.ImgOverlay className="mt-3">
        <Card.Title className="fw-bold fs-4">
          Check your ability, Grow your skill
        </Card.Title>
        <Card.Text className="text-white-50 w-75 m-auto mt-2">
          Want to test your knowledge of a specific language or topic? Give our
          free coding quizzes a try!
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;
