import homeSectionOne from '../../components/sections/homeSectionOne.js';
import homeSectionTwo from '../../components/sections/homeSectionTwo.js';
import floatImage from '../../components/float/floatImage.js';

let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            ${homeSectionOne}
            ${homeSectionTwo}
            ${floatImage}
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;