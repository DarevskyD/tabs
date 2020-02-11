+ function () {

  document.querySelector('.tab').classList.add('active')
  document.querySelector('.tabs-panel').classList.add('active')


  function selectPanel(e) {
    let target = e.target.dataset.target
    document.querySelectorAll('.tab, .tabs-panel').forEach(el => el.classList.remove('active'))
    e.target.classList.add('active')
    document.querySelector('.' + target).classList.add('active')
  }

  document.querySelectorAll('.tab').forEach(el => {
    el.addEventListener('click', selectPanel)
  })

}()