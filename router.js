import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('logout');

  this.route('index', { path: '/' }, function() {

    this.route('brands', { resetNamespace: true }, function() {
      this.route('new');
      this.route('edit', {path: '/:brand_id/edit'});
    });

     this.route('template-field-values', { resetNamespace: true }, function() {
      this.route('edit', {path: '/:template_field_value_id/edit'});
      this.route('new');
    });

    this.route('products', { resetNamespace: true }, function() {
      this.route('edit', {path: '/:product_id/edit'});
      this.route('new');
      this.route('info');
    });

    this.route('specification-templates', { resetNamespace: true }, function() {
      this.route('edit',{path: '/:specification_template_id/edit'});
      this.route('new');

    });

    this.route('template-fields', { resetNamespace: true }, function() {
      this.route('new');
      this.route('edit',{path: '/:template_field_id/edit'});
    });

    this.route('brand-logos', { resetNamespace: true },function() {
        this.route('new');
        this.route('edit',{path: '/:brand_logo_id/edit'});
      });
  });
});

export default Router;
