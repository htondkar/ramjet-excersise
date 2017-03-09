  $(document).ready(function(){

    ramjet.hide(document.getElementById('sec'));

    $(window).on('click', () => {
      ramjet.hide(document.getElementById('main'))
      ramjet.transform(
        document.getElementById('main'),
        document.getElementById('sec'),
        {done: () => ramjet.show(document.getElementById('sec'))}
      )
    })
  });
