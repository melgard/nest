import { INestApplication } from '@nestjs/common';
import { ServeStaticOptions } from './serve-static-options.interface';

export interface NestExpressApplication extends INestApplication {
  /**
   * A wrapper function around native `express.set()` method.
   * Example `app.set('trust proxy', 'loopback')`
   *
   * @returns {this}
   */
  set(...args: any[]): this;

  /**
   * A wrapper function around native `express.engine()` method.
   * Example `app.engine('mustache', mustacheExpress())`
   *
   * @returns {this}
   */
  engine(...args: any[]): this;

  /**
   * A wrapper function around native `express.enable()` method.
   * Example `app.enable('x-powered-by')`
   *
   * @returns {this}
   */
  enable(...args: any[]): this;

  /**
   * A wrapper function around native `express.disable()` method.
   * Example `app.disable('x-powered-by')`
   *
   * @returns {this}
   */
  disable(...args: any[]): this;

  /**
   * Sets a base directory for public assets.
   * Example `app.useStaticAssets('public')
   *
   * @returns {this}
   */
  useStaticAssets(options: ServeStaticOptions): this;
  useStaticAssets(path: string, options?: ServeStaticOptions): this;

  /**
   * Sets one or multiple base directories for templates (views).
   * Example `app.setBaseViewsDir('views')`
   *
   * @returns {this}
   */
  setBaseViewsDir(path: string | string[]): this;

  /**
   * Sets a view engine for templates (views).
   * Example `app.setViewEngine('pug')`
   *
   * @returns {this}
   */
  setViewEngine(engine: string): this;
}
