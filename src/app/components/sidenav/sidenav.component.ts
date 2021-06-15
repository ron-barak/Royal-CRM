import { Component, OnInit } from '@angular/core';

interface NavItem {
  title: string;
  link: string;
  icon: string;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  navItems: NavItem[] = [
    {
      title: 'customers',
      link: 'customers',
      icon: 'fas fa-users',
    },
    {
      title: 'contacts',
      link: 'contacts',
      icon: 'fas fa-address-book',
    },
    {
      title: 'leads',
      link: 'leads',
      icon: 'fas fa-hand-point-up',
    },
    {
      title: 'reports',
      link: 'reports',
      icon: 'fas fa-flag',
    },
    {
      title: 'integrations',
      link: 'integrations',
      icon: 'fab fa-stack-exchange',
    },
    {
      title: 'year-end sale',
      link: 'year-end-sale',
      icon: 'fas fa-glass-cheers',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
