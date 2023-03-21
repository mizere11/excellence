function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Show the selected section
  const selectedSection = document.querySelector(`#${sectionId}`);
  selectedSection.classList.add('active');
}
