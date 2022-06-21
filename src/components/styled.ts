import { styled } from '@stitches/react';

export const FilmListContainer = styled('section', {
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',

  '@media screen and (max-width: 1280px)': {
    overflowX: 'auto'
  }
})

export const StyledFilmListItem = styled('div', {
  boxShadow: '0px 0px 120px -25px rgba(0, 0, 0, 0.5)',
  borderRadius: '10px',
  display: 'inline-block',
  height: '500px',
  margin: '20px',
  overflow: 'hidden',
  position: 'relative',
  transition: 'all 0.4s',
  whiteSpace: 'normal',
  width: 'calc(50% - 40px)',

  '&:hover': {
    boxShadow: '0px 0px 80px -25px rgba(0, 0, 0, 0.5)',
    transform: 'scale(1.02)',
    transition: 'all 0.4s ease',
  },

  '@media screen and (max-width: 768px)': {
    margin: '10px',
    width: 'calc(100% - 20px)',
  },

  '.film-info': {
    backgroundBlendMode: 'multiply',
    borderRadius: '10px',
    height: '100%',
    position: 'relative',
    width: '100%',
    zIndex: 2,

    '.film-header': {
      height: '100%',
      padding: '25px',
      position: 'relative',

      '.film-action-buttons': {
        bottom: 0,
        margin: '20px',
        position: 'absolute',

        '@media screen and (min-width: 1250px)': {
          right: 0,
        },

        '@media screen and (max-width: 1250px)': {
          left: 0,
        },

        '@media screen and (max-width: 425px)': {
          width: '100%',
        },

        '.see-details-button': {
          '@media screen and (max-width: 425px)': {
            width: 'calc(100% - 48px - 0.4rem - 50px)',
          }
        },
      },

      'p': {
        fontSize: '95%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',

        '@media screen and (min-width: 1570px)': {
          '-webkit-line-clamp': 14,
          '-webkit-box-orient': 'vertical',
        },

        '@media screen and (max-width: 1570px)': {
          '-webkit-line-clamp': 4,
          '-webkit-box-orient': 'vertical',
        }
      },

      'h2, h3': {
        '@media screen and (max-width: 1250px)': {
          fontSize: '90%',
          width: '100%',
        }
      },

      'img': {
        borderRadius: '5px',
        boxShadow: '0 0 20px -10px rgba(0, 0, 0, 0.5)',
        float: 'left',
        height: '100%',
        position: 'relative',
        marginRight: '20px',

        '@media screen and (max-width: 1250px)': {
          display: 'block',
          float: 'none',
          height: '45%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '10px',
        }
      }
    },

    '@media screen and (min-width: 1250px)': {
      background: `linear-gradient(
        to right,
        #fff 70%,
        transparent 110%
      )`,
    },

    '@media screen and (max-width: 1250px)': {
      background: `linear-gradient(
        to top,
        #fff 50%,
        transparent 100%
      )`
    }
  },

  '.film-banner': {
    backgroundPosition: 'center !important',
    backgroundRepeat: 'no-repeat !important',
    backgroundSize: 'cover !important',
    borderRadius: '11px',
    filter: 'blur(4px) !important',
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,

    '@media screen and (min-width: 1250px)': {
      backgroundPosition: '-100% 10% !important',
      width: '100%',
    },

    '@media screen and (max-width: 1250px)': {
      backgroundPosition: '100% 100% !important',
      width: '100%',
    }
  }
})
