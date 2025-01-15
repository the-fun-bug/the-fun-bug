var NewsPagePreview = createClass({
  render: function () {
    var entry = this.props.entry;

    var title = entry.getIn(['data', 'title']);
    var category = entry.getIn(['data', 'category']);
    var date = entry.getIn(['data', 'date']);
    var image = entry.getIn(['data', 'image']);
    var imgBgColor = entry.getIn(['data', 'imgBgColor']);
    var imageDescription = entry.getIn(['data', 'imageDescription']);
    var content = entry.getIn(['data', 'content']);

    const formatDate = (date) => {
      return new Date(date).toLocaleDateString('en-US', {
        month: 'long', // This will give the full month name (e.g., "September")
        day: 'numeric', // This will give the day without leading zeros (e.g., "19")
        year: 'numeric', // This will give the full year (e.g., "2024")
      });
    };

    const CategoryButton = ({ category }) => {
      const categories = {
        updates: 'The Fun Bug Updates',
        calendar: 'Monthly Calendar',
        specialties: 'Seasonal Specialties',
      };
      return h(
        'a',
        { style: { textDecoration: 'underline' } },
        categories[category]
      );
    };

    return h(
      'div',
      {
        style: {
          paddingBottom: '3rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: '"Verdana", sans-serif',
        },
      },
      h(
        'div',
        {
          style: {
            maxWidth: '1400px',
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
        },
        h(
          'a',
          {
            href: '/news',
            style: {
              textDecoration: 'underline',
              marginBottom: '3rem',
              width: '100%',
              transition: 'all 0.2s',
              textUnderlineOffset: '2px',
              textAlign: 'left',
              color: 'black',
              fontSize: '12px',
            },
          },
          '< Back to All News'
        ),
        h(
          'section',
          {
            style: {
              width: '100%',
              paddingBottom: '3rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
            },
          },
          h(
            'div',
            {
              style: {
                display: 'flex',
                flexDirection: 'row',
                gap: '3rem',
                justifyContent: 'space-between',
                maxWidth: '1000px',
                width: '100%',
              },
            },
            h(
              'div',
              {
                style: {
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  justifyContent: 'space-between',
                  maxWidth: '500px',
                  textAlign: 'left',
                },
              },
              h(
                'h1',
                {
                  style: {
                    fontFamily: 'Georgia, serif', // Apply Nickainley font
                    textAlign: 'left',
                    fontSize: '48px',
                  },
                },
                title
              ),
              h(
                'div',
                {
                  style: {
                    display: 'flex',
                    gap: '2.5rem',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    maxWidth: '450px',
                    width: '100%',
                  },
                },
                h('p', null, formatDate(date)),
                h(CategoryButton, { category: category })
              )
            ),
            h(
              'div',
              {
                style: {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '0.75rem',
                  width: '450px',
                  height: '275px',
                  padding: '1rem',
                  backgroundColor: imgBgColor,
                },
              },
              h('img', {
                src: image,
                alt: imageDescription,
                width: 330,
                height: 420,
                style: { maxHeight: '250px', width: 'auto' },
                priority: true,
              })
            )
          ),
          h('div', {
            style: {
              width: '100%',
              maxWidth: '1000px',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left',
              whiteSpace: 'pre-wrap', // Preserves spaces and line breaks, and wraps text
              overflowWrap: 'break-word', // Prevents long words from overflowing
            },
            dangerouslySetInnerHTML: { __html: content },
          })
        )
      )
    );
  },
});

CMS.registerPreviewTemplate('news', NewsPagePreview);
