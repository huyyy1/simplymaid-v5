export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      bookings: {
        Row: {
          id: string;
          user_id: string;
          service_id: string;
          location_id: string;
          bedrooms: number;
          bathrooms: number;
          status: "pending" | "confirmed" | "completed" | "cancelled";
          scheduled_date: string | null;
          total_price: number;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          service_id: string;
          location_id: string;
          bedrooms: number;
          bathrooms: number;
          status: "pending" | "confirmed" | "completed" | "cancelled";
          scheduled_date?: string | null;
          total_price: number;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          service_id?: string;
          location_id?: string;
          bedrooms?: number;
          bathrooms?: number;
          status?: "pending" | "confirmed" | "completed" | "cancelled";
          scheduled_date?: string | null;
          total_price?: number;
          notes?: string | null;
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
      // ... Add other table types following the same pattern
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
