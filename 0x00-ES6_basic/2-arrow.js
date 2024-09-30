export default function getNeighorhoodsList() {
  this.sanFranciscoNeighorhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = () => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
