<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'VWRq^8A[-]0QL(9#n*mbY:jo)NaZuLlKfvkVkY&RnQU#Xx]NqLmT8ponjD5ypZG]' );
define( 'SECURE_AUTH_KEY',   'A1eG-0`xu|va|dAT96EeExx}y9Fi#/bmw~6o:tv0:y/:{H,K:;V3u;. <K4P9jEM' );
define( 'LOGGED_IN_KEY',     'dD>E~:Q.(A>;O<p@O!c;%JIH[%D+_Q/Z9?}}!H*ORrlh)F$I@:?-8rPYe,2BBu ~' );
define( 'NONCE_KEY',         '#H>&w]DHEf<ru9PW2Tu$$;6KT!mhw{n&%}0RD20%VN<60|5]_qtKc?~`<&vcnXc7' );
define( 'AUTH_SALT',         '%,$)Bk0~G#I~bJNfKfo?Y:x_u`[eA.$ttiIz{$R?r(v+jceyA,b0,+TjT!-!c<DI' );
define( 'SECURE_AUTH_SALT',  '|`%*JT.Eh]rK%d_nD,2wQ;EodRiW^<.+HeF.UPdVATtV?qT!0>p`RCAS^.I` {~T' );
define( 'LOGGED_IN_SALT',    ':`f7VYE;%Qw[NZN0|<1_*)vE0WDoNI<D=PgR-a.fzk{wsWyyH.5o,btjwYS0MJT$' );
define( 'NONCE_SALT',        '.*Hh~mkt&=ml=nY,3F<a]Y695j1Y~8b|&6?`9:*yWhGMfNaJv|1|er0#}B[tzE`^' );
define( 'WP_CACHE_KEY_SALT', 'IO{17LD7b/{T<Z1n-CC_~R@e!cA@^_1)#7>AhX..0N96Gkw-%M_tvAi.y-3;7,]w' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
