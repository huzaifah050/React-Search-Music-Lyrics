// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { search } from '../../store/actions';

// class Search extends Component {
//   state = {
//     trackList: [{ track: 'search', id: '1' }],
//     heading: 'searched',
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.search(this.state);
//   };
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             name="trackList"
//             id="trackList"
//             onChange={this.handleChange}
//           />
//           <button type="submit">Search</button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   search: search,
// };

// export default connect(null, mapDispatchToProps)(Search);
