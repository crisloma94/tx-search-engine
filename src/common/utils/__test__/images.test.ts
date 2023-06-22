import { getBookCoverPath } from './../images';

describe('Images utils test suite', () => {
  describe('getBookCoverPath function test suite', () => {
    it('Should generate the correct path with cover_i', () => {
      const path = getBookCoverPath({
        author_name: ['Author name test'],
        cover_i: 5678,
        first_publish_year: 1984,
        id_goodreads: ['1234'],
        id_librarything: ['567'],
        isbn: ['89'],
        key: '/works/OL545572W',
        oclc: ['1', '2'],
        publisher: ['Publisher example'],
        title: 'Title test',
      });
      expect(path).toBe('id/5678-M.jpg');
    });

    it('Should generate the correct path with id_librarything', () => {
      const path = getBookCoverPath({
        author_name: ['Author name test'],
        first_publish_year: 1984,
        id_goodreads: ['1234'],
        id_librarything: ['567'],
        isbn: ['89'],
        key: '/works/OL545572W',
        oclc: ['1', '2'],
        publisher: ['Publisher example'],
        title: 'Title test',
      });
      expect(path).toBe('librarything/567-M.jpg');
    });

    it('Should generate the correct path with isbn', () => {
      const path = getBookCoverPath({
        author_name: ['Author name test'],
        first_publish_year: 1984,
        id_goodreads: ['1234'],
        isbn: ['89'],
        key: '/works/OL545572W',
        oclc: ['1', '2'],
        publisher: ['Publisher example'],
        title: 'Title test',
      });
      expect(path).toBe('isbn/89-M.jpg');
    });

    it('Should generate the correct path with oclc', () => {
      const path = getBookCoverPath({
        author_name: ['Author name test'],
        first_publish_year: 1984,
        key: '/works/OL545572W',
        oclc: ['1', '2'],
        publisher: ['Publisher example'],
        title: 'Title test',
      });
      expect(path).toBe('oclc/1-M.jpg');
    });

    it('Should generate the correct path with goodreads', () => {
      const path = getBookCoverPath({
        author_name: ['Author name test'],
        first_publish_year: 1984,
        id_goodreads: ['1234'],
        key: '/works/OL545572W',
        publisher: ['Publisher example'],
        title: 'Title test',
      });
      expect(path).toBe('goodreads/1234-M.jpg');
    });

    it('Should return an empty string if the book has no info', () => {
      const path = getBookCoverPath({
        author_name: ['Author name test'],
        first_publish_year: 1984,
        key: '/works/OL545572W',
        publisher: ['Publisher example'],
        title: 'Title test',
      });
      expect(path).toBe('');
    });
  });
});
