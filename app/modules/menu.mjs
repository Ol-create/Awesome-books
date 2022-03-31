const navLinks = (navlist, section) => {
  for (let i = 0; i <= section.length; i += 1) {
    section[i].style.display = 'none';
    section[0].style.display = 'block';
    navlist[i].addEventListener('click', () => {
      for (let e = 0; e < section.length; e += 1) {
        section[e].style.display = 'none';
      }
      section[i].style.display = 'block';
    });
  }
};

export default navLinks;
