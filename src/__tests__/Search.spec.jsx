import React from 'react';
import {
  shallow
} from 'enzyme';
import preload from '../../data.json';
import Search from '../containers/Search';
import ShowCard from '../components/ShowCard';

xtest('Search renders correctly', () => {
  const component = shallow( < Search / > );
  expect(component).toMatchSnapshot();
});

xtest('Search should render correct amount of shows', () => {
  const component = shallow( < Search / > );
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

xtest('Search should render correct amount of shows based on search term', () => {
  const searchWord = 'black';
  const component = shallow( < Search / > );
  component.find('input').simulate('change', {
    target: {
      value: searchWord
    }
  });
  const showCount = preload.shows.filter(
    show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
  ).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
});
