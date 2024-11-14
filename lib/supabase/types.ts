export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      locations: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          image_url: string | null;
          meta_title: string | null;
          meta_description: string | null;
          coordinates: unknown | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          image_url?: string | null;
          meta_title?: string | null;
          meta_description?: string | null;
          coordinates?: unknown | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          image_url?: string | null;
          meta_title?: string | null;
          meta_description?: string | null;
          coordinates?: unknown | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      services: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          long_description: string | null;
          base_price: number;
          duration_minutes: number;
          image_url: string | null;
          icon_name: string | null;
          meta_title: string | null;
          meta_description: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          long_description?: string | null;
          base_price: number;
          duration_minutes: number;
          image_url?: string | null;
          icon_name?: string | null;
          meta_title?: string | null;
          meta_description?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          long_description?: string | null;
          base_price?: number;
          duration_minutes?: number;
          image_url?: string | null;
          icon_name?: string | null;
          meta_title?: string | null;
          meta_description?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      service_benefits: {
        Row: {
          id: string;
          service_id: string;
          title: string;
          description: string | null;
          icon_name: string | null;
          display_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          service_id: string;
          title: string;
          description?: string | null;
          icon_name?: string | null;
          display_order: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          service_id?: string;
          title?: string;
          description?: string | null;
          icon_name?: string | null;
          display_order?: number;
          created_at?: string;
        };
      };
      reviews: {
        Row: {
          id: string;
          service_id: string | null;
          location_id: string | null;
          author_name: string;
          author_image: string | null;
          rating: number;
          content: string;
          is_featured: boolean;
          is_verified: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          service_id?: string | null;
          location_id?: string | null;
          author_name: string;
          author_image?: string | null;
          rating: number;
          content: string;
          is_featured?: boolean;
          is_verified?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          service_id?: string | null;
          location_id?: string | null;
          author_name?: string;
          author_image?: string | null;
          rating?: number;
          content?: string;
          is_featured?: boolean;
          is_verified?: boolean;
          created_at?: string;
        };
      };
      team_members: {
        Row: {
          id: string;
          name: string;
          role: string;
          bio: string | null;
          image_url: string | null;
          quote: string | null;
          is_featured: boolean;
          display_order: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          role: string;
          bio?: string | null;
          image_url?: string | null;
          quote?: string | null;
          is_featured?: boolean;
          display_order?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          role?: string;
          bio?: string | null;
          image_url?: string | null;
          quote?: string | null;
          is_featured?: boolean;
          display_order?: number | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      seo_pages: {
        Row: {
          id: string;
          path: string;
          title: string;
          description: string | null;
          og_title: string | null;
          og_description: string | null;
          og_image: string | null;
          canonical_url: string | null;
          is_indexed: boolean;
          structured_data: Json | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          path: string;
          title: string;
          description?: string | null;
          og_title?: string | null;
          og_description?: string | null;
          og_image?: string | null;
          canonical_url?: string | null;
          is_indexed?: boolean;
          structured_data?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          path?: string;
          title?: string;
          description?: string | null;
          og_title?: string | null;
          og_description?: string | null;
          og_image?: string | null;
          canonical_url?: string | null;
          is_indexed?: boolean;
          structured_data?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
