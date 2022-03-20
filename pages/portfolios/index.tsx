import Card, { DUMMY_PORTFOLIO_DATA } from '../../components/Card/Card';

export default function Portfolios() {
  return (
    <div className="container">
      <h2>Portfolios</h2>
      <p>
        These are portfolios I have made so far. Mostly I work with JavaScript
        and its libraries, frameworks, or tools.
      </p>
      <div className="row">
        {DUMMY_PORTFOLIO_DATA.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}
